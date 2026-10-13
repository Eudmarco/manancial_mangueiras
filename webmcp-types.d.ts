// Tipos mínimos do WebMCP (proposta em origin trial no Chrome): https://developer.chrome.com/docs/ai/webmcp
import 'react';

declare module 'react' {
    interface FormHTMLAttributes<T> {
        toolname?: string;
        tooldescription?: string;
        toolautosubmit?: boolean;
    }
    interface InputHTMLAttributes<T> {
        toolparamdescription?: string;
    }
    interface SelectHTMLAttributes<T> {
        toolparamdescription?: string;
    }
    interface TextareaHTMLAttributes<T> {
        toolparamdescription?: string;
    }
}

declare global {
    interface ModelContextTool {
        name: string;
        description: string;
        inputSchema: Record<string, unknown>;
        annotations?: { readOnlyHint?: boolean };
        execute: (args: Record<string, unknown>, options: { signal: AbortSignal }) => Promise<string> | string;
    }
    interface ModelContext {
        registerTool(tool: ModelContextTool, options?: { signal?: AbortSignal }): Promise<void>;
    }
    interface Document {
        modelContext?: ModelContext;
    }
    interface SubmitEvent {
        agentInvoked?: boolean;
        respondWith?: (result: Promise<unknown>) => void;
    }
}
