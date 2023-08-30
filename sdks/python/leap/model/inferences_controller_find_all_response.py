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


class InferencesControllerFindAllResponse(
    schemas.ListSchema
):
    """NOTE:
    This class is auto generated by Konfig (https://konfigthis.com)
    """


    class MetaOapg:
        
        @staticmethod
        def items() -> typing.Type['InferenceEntity']:
            return InferenceEntity

    def __new__(
        cls,
        arg: typing.Union[typing.Tuple['InferenceEntity'], typing.List['InferenceEntity']],
        _configuration: typing.Optional[schemas.Configuration] = None,
    ) -> 'InferencesControllerFindAllResponse':
        return super().__new__(
            cls,
            arg,
            _configuration=_configuration,
        )

    def __getitem__(self, i: int) -> 'InferenceEntity':
        return super().__getitem__(i)

from leap.model.inference_entity import InferenceEntity
