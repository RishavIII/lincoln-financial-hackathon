package com.example.demo.bedrock;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import software.amazon.awssdk.auth.credentials.AwsCredentials;
import software.amazon.awssdk.auth.credentials.AwsCredentialsProvider;
import software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.bedrockruntime.BedrockRuntimeAsyncClient;
import software.amazon.awssdk.services.bedrockruntime.model.ContentBlock;
import software.amazon.awssdk.services.bedrockruntime.model.ConversationRole;
import software.amazon.awssdk.services.bedrockruntime.model.ConverseStreamResponseHandler;
import software.amazon.awssdk.services.bedrockruntime.model.Message;



@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class BedrockController {

	@PostMapping("/process")
	public ResponseEntity<String> processJson(@RequestBody String inputJson) {
		// Process the JSON
		JSONObject input = new JSONObject(inputJson);
		JSONObject output = new JSONObject();

		AwsCredentialsProvider credentialsProvider = DefaultCredentialsProvider.create();
		AwsCredentials credentials = credentialsProvider.resolveCredentials();

		System.out.println("Access Key: " + credentials.accessKeyId());
		System.out.println("Secret Key: " + credentials.secretAccessKey());
		// TODO Auto-generated method stub
		// Create a Bedrock Runtime client in the AWS Region you want to use.
		// Replace the DefaultCredentialsProvider with your preferred credentials
		// provider.
		var client = BedrockRuntimeAsyncClient.builder().credentialsProvider(credentialsProvider)
				.region(Region.US_EAST_1).build();

		// Set the model ID to Amazon Titan Text Express.
		var modelId = "us.anthropic.claude-3-7-sonnet-20250219-v1:0";

		JSONArray health = new JSONArray();

		JSONObject json = new JSONObject();

		json.put("date", "2000-06-25");
		json.put("sex", "male");
		json.put("health", health);
		json.put("smoke", false);
		json.put("alcohol", false);

		String formattedString = String.format("Give me a event that happen on %s",input.getString("date"));

		// Create the input text and embed it in a message object with the user role.
		var inputText = formattedString;
		var message = Message.builder().content(ContentBlock.fromText(inputText)).role(ConversationRole.USER).build();

		// StringBuilder to capture the complete response
		StringBuilder llmResponse = new StringBuilder();

		// Create a handler to extract and print the response text in real-time.
		var responseStreamHandler = ConverseStreamResponseHandler.builder()
				.subscriber(ConverseStreamResponseHandler.Visitor.builder().onContentBlockDelta(chunk -> {
					String responseText = chunk.delta().text();
					llmResponse.append(responseText);
					System.out.print(responseText);
				}).build()).onError(err -> System.err.printf("Can't invoke '%s': %s", modelId, err.getMessage()))
				.build();
		try {
			// Send the message with a basic inference configuration and attach the handler.
			client.converseStream(
					request -> request.modelId(modelId).messages(message)
							.inferenceConfig(config -> config.maxTokens(1000).temperature(0.5F).topP(0.9F)),
					responseStreamHandler).get();

		} catch (ExecutionException | InterruptedException e) {
			System.err.printf("Can't invoke '%s': %s", modelId, e.getCause().getMessage());
		}
		
		return new ResponseEntity<>(llmResponse.toString(), HttpStatus.OK);
	}

	@GetMapping("/init")
	public ResponseEntity<String> processJson2() {

		// Add your logic to process the JSON here

		return new ResponseEntity<>("Hi This is Vive Code", HttpStatus.OK);
	}

}
