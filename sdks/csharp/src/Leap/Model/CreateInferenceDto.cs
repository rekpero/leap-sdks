/*
 * Leap
 *
 * The Official Leap API
 *
 * The version of the OpenAPI document: 1.0
 * Generated by: https://konfigthis.com
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Leap.Client.OpenAPIDateConverter;

namespace Leap.Model
{
    /// <summary>
    /// CreateInferenceDto
    /// </summary>
    [DataContract(Name = "CreateInferenceDto")]
    public partial class CreateInferenceDto : IEquatable<CreateInferenceDto>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateInferenceDto" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateInferenceDto() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateInferenceDto" /> class.
        /// </summary>
        /// <param name="prompt">A text description of the image you what you want to generate. (required) (default to &quot;A photo of an astronaut riding a horse&quot;).</param>
        /// <param name="negativePrompt">A text description of what the image should try to avoid generating. (default to &quot;asymmetric, watermarks&quot;).</param>
        /// <param name="steps">How many steps the AI will take to generate the image. Lower is faster but less detailed, higher is slower more detailed. (default to 50D).</param>
        /// <param name="width">The width of the image to use for the inference. Must be a multiple of 8. For best results use 1024x1024 for SDXL, and 512x512 for other models. (default to 1024D).</param>
        /// <param name="height">The height of the image to use for the inference. Must be a multiple of 8. For best results use 1024x1024 for SDXL, and 512x512 for other models. (default to 1024D).</param>
        /// <param name="numberOfImages">The number of images to generate, up to 4. (default to 1D).</param>
        /// <param name="promptStrength">The higher the prompt strength, the closer the generated image will be to the prompt. Must be between 0 and 30. (default to 7D).</param>
        /// <param name="seed">A random number to use as a seed when generating the image. This is helpful if you want to generate the same image multiple times. If you want to generate different images, keep this empty or provide a random number. (default to 4523184D).</param>
        /// <param name="webhookUrl">An optional webhook URL that will be called with a POST request when the image generation request completes..</param>
        public CreateInferenceDto(string prompt = "A photo of an astronaut riding a horse", string negativePrompt = "asymmetric, watermarks", double steps = 50D, double width = 1024D, double height = 1024D, double numberOfImages = 1D, double promptStrength = 7D, double seed = 4523184D, string webhookUrl = default(string))
        {
            // to ensure "prompt" is required (not null)
            if (prompt == null)
            {
                throw new ArgumentNullException("prompt is a required property for CreateInferenceDto and cannot be null");
            }
            this.Prompt = prompt;
            // use default value if no "negativePrompt" provided
            this.NegativePrompt = negativePrompt ?? "asymmetric, watermarks";
            this.Steps = steps;
            this.Width = width;
            this.Height = height;
            this.NumberOfImages = numberOfImages;
            this.PromptStrength = promptStrength;
            this.Seed = seed;
            this.WebhookUrl = webhookUrl;
        }

        /// <summary>
        /// A text description of the image you what you want to generate.
        /// </summary>
        /// <value>A text description of the image you what you want to generate.</value>
        [DataMember(Name = "prompt", IsRequired = true, EmitDefaultValue = true)]
        public string Prompt { get; set; }

        /// <summary>
        /// A text description of what the image should try to avoid generating.
        /// </summary>
        /// <value>A text description of what the image should try to avoid generating.</value>
        [DataMember(Name = "negativePrompt", EmitDefaultValue = false)]
        public string NegativePrompt { get; set; }

        /// <summary>
        /// How many steps the AI will take to generate the image. Lower is faster but less detailed, higher is slower more detailed.
        /// </summary>
        /// <value>How many steps the AI will take to generate the image. Lower is faster but less detailed, higher is slower more detailed.</value>
        [DataMember(Name = "steps", EmitDefaultValue = false)]
        public double Steps { get; set; }

        /// <summary>
        /// The width of the image to use for the inference. Must be a multiple of 8. For best results use 1024x1024 for SDXL, and 512x512 for other models.
        /// </summary>
        /// <value>The width of the image to use for the inference. Must be a multiple of 8. For best results use 1024x1024 for SDXL, and 512x512 for other models.</value>
        [DataMember(Name = "width", EmitDefaultValue = false)]
        public double Width { get; set; }

        /// <summary>
        /// The height of the image to use for the inference. Must be a multiple of 8. For best results use 1024x1024 for SDXL, and 512x512 for other models.
        /// </summary>
        /// <value>The height of the image to use for the inference. Must be a multiple of 8. For best results use 1024x1024 for SDXL, and 512x512 for other models.</value>
        [DataMember(Name = "height", EmitDefaultValue = false)]
        public double Height { get; set; }

        /// <summary>
        /// The number of images to generate, up to 4.
        /// </summary>
        /// <value>The number of images to generate, up to 4.</value>
        [DataMember(Name = "numberOfImages", EmitDefaultValue = false)]
        public double NumberOfImages { get; set; }

        /// <summary>
        /// The higher the prompt strength, the closer the generated image will be to the prompt. Must be between 0 and 30.
        /// </summary>
        /// <value>The higher the prompt strength, the closer the generated image will be to the prompt. Must be between 0 and 30.</value>
        [DataMember(Name = "promptStrength", EmitDefaultValue = false)]
        public double PromptStrength { get; set; }

        /// <summary>
        /// A random number to use as a seed when generating the image. This is helpful if you want to generate the same image multiple times. If you want to generate different images, keep this empty or provide a random number.
        /// </summary>
        /// <value>A random number to use as a seed when generating the image. This is helpful if you want to generate the same image multiple times. If you want to generate different images, keep this empty or provide a random number.</value>
        [DataMember(Name = "seed", EmitDefaultValue = false)]
        public double Seed { get; set; }

        /// <summary>
        /// An optional webhook URL that will be called with a POST request when the image generation request completes.
        /// </summary>
        /// <value>An optional webhook URL that will be called with a POST request when the image generation request completes.</value>
        [DataMember(Name = "webhookUrl", EmitDefaultValue = false)]
        public string WebhookUrl { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateInferenceDto {\n");
            sb.Append("  Prompt: ").Append(Prompt).Append("\n");
            sb.Append("  NegativePrompt: ").Append(NegativePrompt).Append("\n");
            sb.Append("  Steps: ").Append(Steps).Append("\n");
            sb.Append("  Width: ").Append(Width).Append("\n");
            sb.Append("  Height: ").Append(Height).Append("\n");
            sb.Append("  NumberOfImages: ").Append(NumberOfImages).Append("\n");
            sb.Append("  PromptStrength: ").Append(PromptStrength).Append("\n");
            sb.Append("  Seed: ").Append(Seed).Append("\n");
            sb.Append("  WebhookUrl: ").Append(WebhookUrl).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as CreateInferenceDto);
        }

        /// <summary>
        /// Returns true if CreateInferenceDto instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateInferenceDto to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateInferenceDto input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Prompt == input.Prompt ||
                    (this.Prompt != null &&
                    this.Prompt.Equals(input.Prompt))
                ) && 
                (
                    this.NegativePrompt == input.NegativePrompt ||
                    (this.NegativePrompt != null &&
                    this.NegativePrompt.Equals(input.NegativePrompt))
                ) && 
                (
                    this.Steps == input.Steps ||
                    this.Steps.Equals(input.Steps)
                ) && 
                (
                    this.Width == input.Width ||
                    this.Width.Equals(input.Width)
                ) && 
                (
                    this.Height == input.Height ||
                    this.Height.Equals(input.Height)
                ) && 
                (
                    this.NumberOfImages == input.NumberOfImages ||
                    this.NumberOfImages.Equals(input.NumberOfImages)
                ) && 
                (
                    this.PromptStrength == input.PromptStrength ||
                    this.PromptStrength.Equals(input.PromptStrength)
                ) && 
                (
                    this.Seed == input.Seed ||
                    this.Seed.Equals(input.Seed)
                ) && 
                (
                    this.WebhookUrl == input.WebhookUrl ||
                    (this.WebhookUrl != null &&
                    this.WebhookUrl.Equals(input.WebhookUrl))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Prompt != null)
                {
                    hashCode = (hashCode * 59) + this.Prompt.GetHashCode();
                }
                if (this.NegativePrompt != null)
                {
                    hashCode = (hashCode * 59) + this.NegativePrompt.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Steps.GetHashCode();
                hashCode = (hashCode * 59) + this.Width.GetHashCode();
                hashCode = (hashCode * 59) + this.Height.GetHashCode();
                hashCode = (hashCode * 59) + this.NumberOfImages.GetHashCode();
                hashCode = (hashCode * 59) + this.PromptStrength.GetHashCode();
                hashCode = (hashCode * 59) + this.Seed.GetHashCode();
                if (this.WebhookUrl != null)
                {
                    hashCode = (hashCode * 59) + this.WebhookUrl.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
