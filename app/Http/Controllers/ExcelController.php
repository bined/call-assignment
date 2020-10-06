<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Excel;
use BayAreaWebPro\SimpleCsv\SimpleCsv;
use App\Helpres\HelpersTrait;

/**
 * Class ExcelController
 * @package App\Http\Controllers
 */
class ExcelController extends Controller
{

    use HelpersTrait;

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function import(Request $request){
        $request->validate([
             'agents_file' => 'required|mimes:csv,txt',
             'leads_file'  => 'required|mimes:csv,txt',
        ]);
        
        $agents_file = $request->file('agents_file');
        $leads_file = $request->file('leads_file');
        $agents_assign = [];
        $agent_index = 0;
        $assigned_leads = [];

        // Import Agents file
        $import_agents = SimpleCsv::import($agents_file);
        $agents = $this->formatDataCsv($import_agents);

        // Import Leads File
        $import_leads = SimpleCsv::import($leads_file);
        $leads = $this->formatDataCsv($import_leads);

        foreach($agents as $agent) {
            if(trim($agent['Status']) != 'Busy') {
                while($agent['Weight']--) {
                    $agents_assign[] = $agent['Name'];
                }
            }
        }

        foreach($leads as $key => $lead) {
            $agent_index  = isset($agents_assign[$agent_index]) ? $agent_index : 0;
            $lead_data['agent'] = $agents_assign[$agent_index];
            $lead_data['name'] = $lead['Name'];
            $lead_data['email'] = $lead['Email'];

            $assigned_leads[] = $lead_data;
            $agent_index++;
        }

        return response()->json([
            'success' => true,
            'leads'   => $assigned_leads
        ],200);
    }
}
