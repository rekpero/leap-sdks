# coding: utf-8

"""
    Leap

    The Official Leap API

    The version of the OpenAPI document: 1.0
    Generated by: https://konfigthis.com
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from leap import schemas  # noqa: F401


class ListModelsV2Response(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)
    """


    class MetaOapg:
        required = {
            "models",
        }
        
        class properties:
            
            
            class models(
                schemas.ListSchema
            ):
            
            
                class MetaOapg:
                    
                    @staticmethod
                    def items() -> typing.Type['ModelV2Entity']:
                        return ModelV2Entity
            
                def __new__(
                    cls,
                    arg: typing.Union[typing.Tuple['ModelV2Entity'], typing.List['ModelV2Entity']],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'models':
                    return super().__new__(
                        cls,
                        arg,
                        _configuration=_configuration,
                    )
            
                def __getitem__(self, i: int) -> 'ModelV2Entity':
                    return super().__getitem__(i)
            __annotations__ = {
                "models": models,
            }
    
    models: MetaOapg.properties.models
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["models"]) -> MetaOapg.properties.models: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["models", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["models"]) -> MetaOapg.properties.models: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["models", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        models: typing.Union[MetaOapg.properties.models, list, tuple, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'ListModelsV2Response':
        return super().__new__(
            cls,
            *args,
            models=models,
            _configuration=_configuration,
            **kwargs,
        )

from leap.model.model_v2_entity import ModelV2Entity