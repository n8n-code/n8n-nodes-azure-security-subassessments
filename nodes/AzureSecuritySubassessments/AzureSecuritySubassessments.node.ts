import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSecuritySubassessments implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure Security Subassessments',
		name: 'N8nDevAzureSecuritySubassessments',
		icon: { light: 'file:./azure-security-subassessments.png', dark: 'file:./azure-security-subassessments.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Azure Security Center API specification for Microsoft.Security resource provider.',
		defaults: { name: 'Azure Security Subassessments' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureSecuritySubassessmentsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
