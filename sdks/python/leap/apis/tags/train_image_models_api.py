# coding: utf-8

"""
    Leap

    The Official Leap API

    The version of the OpenAPI document: 1.0
    Generated by: https://konfigthis.com
"""

from leap.paths.api_v2_images_models_model_id.delete import DeleteModel
from leap.paths.api_v2_images_models_model_id.get import GetModel
from leap.paths.api_v2_images_models.get import ListAllModels
from leap.paths.api_v2_images_models_new.post import TrainModel


class TrainImageModelsApi(
    DeleteModel,
    GetModel,
    ListAllModels,
    TrainModel,
):
    """NOTE:
    This class is auto generated by Konfig (https://konfigthis.com)
    """
    pass
