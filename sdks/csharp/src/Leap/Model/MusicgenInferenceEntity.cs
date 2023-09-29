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
    /// MusicgenInferenceEntity
    /// </summary>
    [DataContract(Name = "MusicgenInferenceEntity")]
    public partial class MusicgenInferenceEntity : IEquatable<MusicgenInferenceEntity>, IValidatableObject
    {
        /// <summary>
        /// Defines State
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum StateEnum
        {
            /// <summary>
            /// Enum Failed for value: failed
            /// </summary>
            [EnumMember(Value = "failed")]
            Failed = 1,

            /// <summary>
            /// Enum Finished for value: finished
            /// </summary>
            [EnumMember(Value = "finished")]
            Finished = 2,

            /// <summary>
            /// Enum Processing for value: processing
            /// </summary>
            [EnumMember(Value = "processing")]
            Processing = 3,

            /// <summary>
            /// Enum Queued for value: queued
            /// </summary>
            [EnumMember(Value = "queued")]
            Queued = 4

        }


        /// <summary>
        /// Gets or Sets State
        /// </summary>
        [DataMember(Name = "state", IsRequired = true, EmitDefaultValue = true)]
        public StateEnum State { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="MusicgenInferenceEntity" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected MusicgenInferenceEntity() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="MusicgenInferenceEntity" /> class.
        /// </summary>
        /// <param name="id">id (required).</param>
        /// <param name="createdAt">createdAt (required).</param>
        /// <param name="prompt">prompt (required).</param>
        /// <param name="state">state (required).</param>
        /// <param name="mediaUri">mediaUri.</param>
        public MusicgenInferenceEntity(string id = default(string), DateTime createdAt = default(DateTime), string prompt = default(string), StateEnum state = default(StateEnum), string mediaUri = default(string))
        {
            // to ensure "id" is required (not null)
            if (id == null)
            {
                throw new ArgumentNullException("id is a required property for MusicgenInferenceEntity and cannot be null");
            }
            this.Id = id;
            this.CreatedAt = createdAt;
            // to ensure "prompt" is required (not null)
            if (prompt == null)
            {
                throw new ArgumentNullException("prompt is a required property for MusicgenInferenceEntity and cannot be null");
            }
            this.Prompt = prompt;
            this.State = state;
            this.MediaUri = mediaUri;
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = true)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets CreatedAt
        /// </summary>
        [DataMember(Name = "createdAt", IsRequired = true, EmitDefaultValue = true)]
        public DateTime CreatedAt { get; set; }

        /// <summary>
        /// Gets or Sets Prompt
        /// </summary>
        [DataMember(Name = "prompt", IsRequired = true, EmitDefaultValue = true)]
        public string Prompt { get; set; }

        /// <summary>
        /// Gets or Sets MediaUri
        /// </summary>
        [DataMember(Name = "media_uri", EmitDefaultValue = false)]
        public string MediaUri { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class MusicgenInferenceEntity {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  CreatedAt: ").Append(CreatedAt).Append("\n");
            sb.Append("  Prompt: ").Append(Prompt).Append("\n");
            sb.Append("  State: ").Append(State).Append("\n");
            sb.Append("  MediaUri: ").Append(MediaUri).Append("\n");
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
            return this.Equals(input as MusicgenInferenceEntity);
        }

        /// <summary>
        /// Returns true if MusicgenInferenceEntity instances are equal
        /// </summary>
        /// <param name="input">Instance of MusicgenInferenceEntity to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(MusicgenInferenceEntity input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.CreatedAt == input.CreatedAt ||
                    (this.CreatedAt != null &&
                    this.CreatedAt.Equals(input.CreatedAt))
                ) && 
                (
                    this.Prompt == input.Prompt ||
                    (this.Prompt != null &&
                    this.Prompt.Equals(input.Prompt))
                ) && 
                (
                    this.State == input.State ||
                    this.State.Equals(input.State)
                ) && 
                (
                    this.MediaUri == input.MediaUri ||
                    (this.MediaUri != null &&
                    this.MediaUri.Equals(input.MediaUri))
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
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                if (this.CreatedAt != null)
                {
                    hashCode = (hashCode * 59) + this.CreatedAt.GetHashCode();
                }
                if (this.Prompt != null)
                {
                    hashCode = (hashCode * 59) + this.Prompt.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.State.GetHashCode();
                if (this.MediaUri != null)
                {
                    hashCode = (hashCode * 59) + this.MediaUri.GetHashCode();
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