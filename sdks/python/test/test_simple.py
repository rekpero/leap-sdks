# coding: utf-8

"""
    Leap

    The Official Leap API

    The version of the OpenAPI document: 1.0
    Generated by: https://konfigthis.com
"""

import unittest

import os
from pprint import pprint
from leap import Leap

MOCK_SERVER_URL = "http://localhost:4010"
class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        leap = Leap(
            # Defining the host is optional and defaults to https://api.tryleap.ai
            # See configuration.py for a list of all supported configuration parameters.
            host = "https://api.tryleap.ai",

            # Configure Bearer authorization (JWT): bearer
            access_token = 'YOUR_BEARER_TOKEN'
        )
        self.assertIsNotNone(leap)

    def test_multiple_requests(self):
        leap = Leap(
            host=MOCK_SERVER_URL,
            access_token="TEST"
        )
        inference = leap.generate_images.create(model_id="test", prompt="A red bird")
        images = leap.generate_images.find_one(model_id="test", inference_id=inference.body["id"])
        self.assertIsNotNone(images.body)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()