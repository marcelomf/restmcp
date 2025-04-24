import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "/home/marcelo/.nvm/versions/node/v22.14.0/bin/node",
  args: ["dist/index.js"]
});

const client = new Client(
  {
    name: "example-client",
    version: "1.0.0"
  }
);

async function run() {
    await client.connect(transport);

    // List prompts
    const prompts = await client.listPrompts();

    // Get a prompt
    const prompt = await client.getPrompt({
    name: "query",
    arguments: {
        sql: "select * from vm"
    }
    });

    
    // List resources
    const resources = await client.listResources();
    console.log("VEIO");
    /*
    // Read a resource
    const resource = await client.readResource({
    uri: "file:///example.txt"
    });

    // Call a tool
    const result = await client.callTool({
    name: "example-tool",
        arguments: {
            arg1: "value"
        }
    });
    */
}
run();