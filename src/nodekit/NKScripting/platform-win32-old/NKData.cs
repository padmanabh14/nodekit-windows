﻿/*
* nodekit.io
*
* Copyright (c) 2016 OffGrid Networks. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Json;
using System.Text;

namespace io.nodekit.NKScripting
{
    public class NKData
    {
        public static string jsonSerialize(Dictionary<string, object> instance)
        {
            var settings = new DataContractJsonSerializerSettings
            {
                UseSimpleDictionaryFormat = true
            };
            var serializer = new DataContractJsonSerializer(typeof(Dictionary<string, object>), settings);
            using (var stream = new MemoryStream())
            {
                serializer.WriteObject(stream, instance);
                return Encoding.UTF8.GetString(stream.ToArray(), 0, (int)stream.Length);
            }
        }

        public static string jsonSerialize(string obj)
        {
            var serializer = new DataContractJsonSerializer(typeof(String));
            using (var stream = new MemoryStream())
            {
                serializer.WriteObject(stream, obj);
                return Encoding.UTF8.GetString(stream.ToArray(), 0, (int)stream.Length);
            }
        }

        public static Dictionary<string, object> jsonDeserialize(string json)
        {
            var settings = new DataContractJsonSerializerSettings
            {
                UseSimpleDictionaryFormat = true
            };
            var serializer = new DataContractJsonSerializer(typeof(Dictionary<string, object>), settings);
            using (var stream = new MemoryStream(Encoding.UTF8.GetBytes(json)))
            {
                return (Dictionary<string, object>)serializer.ReadObject(stream);
            }
        }
    }
}
