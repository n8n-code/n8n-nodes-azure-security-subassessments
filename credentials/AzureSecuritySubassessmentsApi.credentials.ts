import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSecuritySubassessmentsApi implements ICredentialType {
        name = 'N8nDevAzureSecuritySubassessmentsApi';

        displayName = 'Azure Security Subassessments API';

        icon: Icon = { light: 'file:../nodes/AzureSecuritySubassessments/azure-security-subassessments.png', dark: 'file:../nodes/AzureSecuritySubassessments/azure-security-subassessments.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Security Subassessments API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
