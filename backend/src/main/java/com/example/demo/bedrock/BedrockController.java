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
		String[][] plans = {
            {"", "Health", "", "Dental", "", "Vision", "", "Critical Care", "", "Caregiver"},
            {"Option A", "", "Option A", "", "Option A", "", "Option A", "", "Option A", ""},
            {"Monthly Premium", "$125", "Monthly Premium", "$25", "Monthly Premium", "$8", "Monthly Premium", "$150", "Monthly Cost", "$0"},
            {"Deductible", "$3,000", "Annual Maximum Benefit", "$1,000", "Coverage", "Annual comprehensive eye exam (100% covered Frames: $100 allowance every 12 months Standard lenses: Covered in full every 12 months Contact lenses: $100 allowance (in lieu of glasses)", "Deductible / Cost-Share", "$1,000", "Stipend", "$250"},
            {"Out-of-Pocket Maximum", "$6,000", "Coverage", "Preventive care: 100% (cleanings, exams, X-rays) Basic procedures: 70% (fillings, extractions) Major procedures: 50% (crowns, bridges)", "Best For", "Employees who need routine vision care and budget-friendly coverage", "Out-of-Pocket Maximum", "$6,500", "Coverage / Use", "Short-term in-home personal care assistance (bathing, meal prep) — limited hours Respite care for family caregivers (up to 30 hours/month) Coordination assistance via a dedicated caregiver navigator (limited)"},
            {"Primary Care Copay Visit", "$35", "Best For", "Routine dental maintenance", "Option B", "", "Coverage", "Inpatient ICU care (semi-private room) — covered after deductible Short-term step-down unit care Critical care physician services Emergency transport to nearest appropriate facility (air/ground) — subject to prior authorization when non-emergent Palliative consultations (limited visits)", "Best For", "Employees who occasionally need help managing at-home care for an older adult or post-discharge patient"},
            {"Specialist Copay Visit", "$70", "Option B", "", "Monthly Premium", "$20", "Best For", "Individuals at moderate risk for acute hospitalizations or those who want basic protection for high-cost inpatient events", "Option B", ""},
            {"Coverage", "Primary care visits Emergency care Generic prescriptions Preventive services (100% covered)", "Monthly Premium", "$45", "Coverage", "Annual comprehensive eye exam (100% covered) Frames: $200 allowance every 12 months Premium lenses (anti-glare, progressive): Covered with a small copay Contact lenses: $150 allowance (in lieu of glasses) plus fittings 25% discount on LASIK and elective vision procedures", "Option B", "", "Monthly Premium", "$40"},
            {"Best For", "Healthy individuals with minimal healthcare needs", "Annual Maximum Benefit", "$2,000", "Best For", "Employees who want broader materials coverage, premium lenses, or frequent prescription updates", "Monthly Premium", "$320", "Benefit", "$750"},
            {"Option B", "", "Coverage", "Preventive care: 100% Basic procedures: 80% Major procedures: 60% Orthodontia: 50% (up to $1,500 lifetime max)", "", "", "Deductible / Cost-Share", "$500", "Coverage / Use", "In-home skilled and non-skilled caregiving Adult day care programs Short-term assisted living stays Respite care (expanded hours) Training resources and counseling for family caregivers"},
            {"Monthly Premium", "$245", "Best For", "Families or those needing extensive dental work", "", "", "Out-of-Pocket Maximum", "$4,000", "Best For", "Employees actively providing care to a family member who need sustained support and financial relief"},
            {"Deductible", "$1,500", "", "", "", "", "Coverage", "Comprehensive ICU and step-down care Expanded critical care physician and specialist consults ICU-level telemedicine monitoring Post-discharge transitional care program (home nurse visits for 14 days) Emergency and medically necessary air transport (with fewer restrictions)", "Option C", ""},
            {"Out-of-Pocket Maximum", "$4,000", "", "", "", "", "Best For", "Those with complex medical histories or household Employer-arranged respite and temporary replacement caregiver services", "", ""},
            {"Coverage", "Primary & specialist care Emergency care Prescriptions (generic & brand name) Lab work and diagnostic tests X-rays and imaging Preventive services (100% covered)", "", "", "", "", "Deductible / Cost-Share", "$0", "Best For", "Employees managing heavy caregiving responsibilities who need hands-on support and navigation"},
            {"Best For", "Individuals and families with moderate healthcare needs", "", "", "", "", "Out-of-Pocket Maximum", "$2,000", "", ""},
            {"Option C", "", "", "", "", "", "Coverage", "Full inpatient critical care coverage with minimal financial barriers Private room when medically appropriate 24/7 access to critical care nurse hotline Comprehensive post-discharge case management and rehabilitation coordination Nationwide emergency evacuation and repatriation Unlimited palliative and hospice planning consultations", "", ""},
            {"Monthly Premium", "$380", "", "", "", "", "Best For", "Individuals who want top-tier financial protection and care coordination for serious illness or injury", "", ""},
            {"Deductible", "$500", "", "", "", "", "", "", "", ""},
            {"Out-of-Pocket Maximum", "$2,000", "", "", "", "", "", "", "", ""},
            {"Primary Care Copay Visit", "$15", "", "", "", "", "", "", "", ""},
            {"Specialist Copay Visit", "$30", "", "", "", "", "", "", "", ""},
            {"Coverage", "Comprehensive medical care Preventive services (100% covered) Mental health services Physical therapy All prescriptions Maternity care Emergency care worldwide", "", "", "", "", "", "", "", ""},
            {"Best For", "Those with ongoing medical needs or families planning for major healthcare expenses", "", "", "", "", "", "", "", ""}
        };
        
		JSONObject input = new JSONObject(inputJson);
		JSONObject output = new JSONObject();
		
		AwsCredentialsProvider credentialsProvider = DefaultCredentialsProvider.create();
		var client = BedrockRuntimeAsyncClient.builder().credentialsProvider(credentialsProvider)
				.region(Region.US_EAST_1).build();
		var modelId = "us.anthropic.claude-3-7-sonnet-20250219-v1:0";
		
		JSONObject json = new JSONObject();
		JSONArray inputArray = new JSONArray();
		
		json.put("sex","Male");
		json.put("date","2000-06-24");
		json.put("children","Yes");
		json.put("married","Yes");
		json.put("smoking","No");
		json.put("drinking","Yes");
		json.put("travel","Yearly");
		json.put("health",inputArray);
		json.put("saving","6");
		json.put("paycheck","7");
		
		StringBuilder llmResponse = new StringBuilder();
		String prompt = "Use the following array";
		prompt=prompt.concat(new JSONArray(plans).toString());
		prompt+="to output only the letter for health section option based on the json: " + json.toString();		
		prompt +="if you find that you have output more than one letter you must immediately stop.";
		var message = Message.builder().content(ContentBlock.fromText(prompt)).role(ConversationRole.USER).build();
		
		var responseStreamHandler = ConverseStreamResponseHandler.builder()
				.subscriber(ConverseStreamResponseHandler.Visitor.builder().onContentBlockDelta(chunk -> {
					llmResponse.append(chunk.delta().text());
				}).build()).build();
				
		try {
			client.converseStream(
					request -> request.modelId(modelId).messages(message)
							.inferenceConfig(config -> config.maxTokens(1000).temperature(0.5F).topP(0.9F)),
					responseStreamHandler).get();
		} catch (ExecutionException | InterruptedException e) {
			System.err.printf("Can't invoke '%s': %s", modelId, e.getCause().getMessage());
		}
		
		output.put("health", llmResponse.toString().substring(0, 1));
		
		StringBuilder llmResponse1 = new StringBuilder();
		prompt = "Use the following array";
		prompt=prompt.concat(new JSONArray(plans).toString());
		prompt+="to output only the letter for dental section option based on the json: " + json.toString();		
		prompt +="if you find that you have output more than one letter you must immediately stop.";
		var message1 = Message.builder().content(ContentBlock.fromText(prompt)).role(ConversationRole.USER).build();
		
		responseStreamHandler = ConverseStreamResponseHandler.builder()
				.subscriber(ConverseStreamResponseHandler.Visitor.builder().onContentBlockDelta(chunk -> {
					llmResponse1.append(chunk.delta().text());
				}).build()).build();
				
		try {
			client.converseStream(
					request -> request.modelId(modelId).messages(message1)
							.inferenceConfig(config -> config.maxTokens(1000).temperature(0.5F).topP(0.9F)),
					responseStreamHandler).get();
		} catch (ExecutionException | InterruptedException e) {
			System.err.printf("Can't invoke '%s': %s", modelId, e.getCause().getMessage());
		}
		
		output.put("dental", llmResponse1.toString().substring(0, 1));
		
		StringBuilder llmResponse2 = new StringBuilder();
		prompt = "Use the following array";
		prompt=prompt.concat(new JSONArray(plans).toString());
		prompt+="to output only the letter for vison section option based on the json: " + json.toString();		
		prompt +="if you find that you have output more than one letter you must immediately stop.";
		var message2 = Message.builder().content(ContentBlock.fromText(prompt)).role(ConversationRole.USER).build();
		
		responseStreamHandler = ConverseStreamResponseHandler.builder()
				.subscriber(ConverseStreamResponseHandler.Visitor.builder().onContentBlockDelta(chunk -> {
					llmResponse2.append(chunk.delta().text());
				}).build()).build();
				
		try {
			client.converseStream(
					request -> request.modelId(modelId).messages(message2)
							.inferenceConfig(config -> config.maxTokens(1000).temperature(0.5F).topP(0.9F)),
					responseStreamHandler).get();
		} catch (ExecutionException | InterruptedException e) {
			System.err.printf("Can't invoke '%s': %s", modelId, e.getCause().getMessage());
		}
		
		output.put("vison", llmResponse2.toString().substring(0, 1));
		
		StringBuilder llmResponse3 = new StringBuilder();
		prompt = "Use the following array";
		prompt=prompt.concat(new JSONArray(plans).toString());
		prompt+="to output only the letter for critical care section option based on the json: " + json.toString();		
		prompt +="if you find that you have output more than one letter you must immediately stop.";
		var message3 = Message.builder().content(ContentBlock.fromText(prompt)).role(ConversationRole.USER).build();
		
		responseStreamHandler = ConverseStreamResponseHandler.builder()
				.subscriber(ConverseStreamResponseHandler.Visitor.builder().onContentBlockDelta(chunk -> {
					llmResponse3.append(chunk.delta().text());
				}).build()).build();
				
		try {
			client.converseStream(
					request -> request.modelId(modelId).messages(message3)
							.inferenceConfig(config -> config.maxTokens(1000).temperature(0.5F).topP(0.9F)),
					responseStreamHandler).get();
		} catch (ExecutionException | InterruptedException e) {
			System.err.printf("Can't invoke '%s': %s", modelId, e.getCause().getMessage());
		}
		
		output.put("critical care", llmResponse3.toString().substring(0, 1));
		
		StringBuilder llmResponse4 = new StringBuilder();
		prompt = "Use the following array";
		prompt=prompt.concat(new JSONArray(plans).toString());
		prompt+="to output only the letter for caregiver section option based on the json: " + json.toString();		
		prompt +="if you find that you have output more than one letter you must immediately stop.";
		var message4 = Message.builder().content(ContentBlock.fromText(prompt)).role(ConversationRole.USER).build();
		
		responseStreamHandler = ConverseStreamResponseHandler.builder()
				.subscriber(ConverseStreamResponseHandler.Visitor.builder().onContentBlockDelta(chunk -> {
					llmResponse4.append(chunk.delta().text());
				}).build()).build();
				
		try {
			client.converseStream(
					request -> request.modelId(modelId).messages(message4)
							.inferenceConfig(config -> config.maxTokens(1000).temperature(0.5F).topP(0.9F)),
					responseStreamHandler).get();
		} catch (ExecutionException | InterruptedException e) {
			System.err.printf("Can't invoke '%s': %s", modelId, e.getCause().getMessage());
		}
		
		output.put("caregiver", llmResponse4.toString().substring(0, 1));
		
		
		return new ResponseEntity<>(output.toString(), HttpStatus.OK);
	}

	@GetMapping("/init")
	public ResponseEntity<String> processJson2() {
		return new ResponseEntity<>("Hi This is Vive Code", HttpStatus.OK);
	}
}