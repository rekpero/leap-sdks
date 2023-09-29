/*
 * Leap
 *
 * The Official Leap API
 *
 * The version of the OpenAPI document: 1.0
 * Generated by: https://konfigthis.com
 */


using Leap.Api;

namespace Leap.Client
{
    /// <summary>
    ///  SDK client
    /// </summary>
    public class LeapClient
    {
        /// <summary>
        /// API instance
        /// </summary>
        public ImagesApi Images { get; private set; }

        /// <summary>
        /// API instance
        /// </summary>
        public ImageModelsApi ImageModels { get; private set; }

        /// <summary>
        /// API instance
        /// </summary>
        public MusicApi Music { get; private set; }

        /// <summary>
        /// Configuration instance
        /// </summary>
        public readonly Configuration Configuration;

        /// <summary>
        /// Constructor
        /// </summary>
        public LeapClient()
        {
            Configuration = new Configuration();
            init();
        }

        private void init()
        {
            Images = new ImagesApi(Configuration);
            ImageModels = new ImageModelsApi(Configuration);
            Music = new MusicApi(Configuration);
        }

        /// <summary>
        /// Setter for base path
        /// </summary>
        public LeapClient SetBasePath(string basePath)
        {
            Configuration.BasePath = basePath;
            init();
            return this;
        }

        /// <summary>
        /// Setter for verify SSL configuration. Set to false when you want to disable SSL verification.
        /// </summary>
        public LeapClient SetVerifySsl(bool verifySsl)
        {
            Configuration.VerifySsl = verifySsl;
            init();
            return this;
        }

        /// <summary>
        /// Setter for Username
        /// </summary>
        public LeapClient SetUsername(string username)
        {
            Configuration.Username = username;
            init();
            return this;
        }

        /// <summary>
        /// Setter for Password
        /// </summary>
        public LeapClient SetPassword(string password)
        {
            Configuration.Password = password;
            init();
            return this;
        }

        /// <summary>
        /// Setter for Access Token
        /// </summary>
        public LeapClient SetAccessToken(string accessToken)
        {
            Configuration.AccessToken = accessToken;
            init();
            return this;
        }
    }
}
