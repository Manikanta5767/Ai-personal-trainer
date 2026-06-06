import Vapi from "@vapi-ai/web";

// 1. Paste your actual Vapi Public Key string inside these quotes
const VAPI_PUBLIC_KEY = "cfc35589-4c09-46be-8f08-18169c5780a5";

// 2. Paste your actual Vapi Assistant ID string inside these quotes
const VAPI_WORKFLOW_ID = "a620534c-32ff-4eaf-9260-842d32e424c3";

export const vapi = new Vapi(VAPI_PUBLIC_KEY);
export const vapiWorkflowId = VAPI_WORKFLOW_ID;