Blockly.defineBlocksWithJsonArray([
{
  /*"type": "analog_read",
  "message0": "sonar pin: %1 repeat : %2 sort : %3",
  "args0": [
    {
      "type": "input_value",
      "name": "trig"
      
    },
    {
      "type": "input_value",
      "name": "ANS"
    },
    {
      "type": "input_value",
      "name": "sort"
    }*/
 // ]
 "type": "sen",
 "message0": "ostart %1 + ostop %2 - ostart %3 * value %4 - istart %5 / istop %6 - istart %7 ",
 "args0": [
   {
     "type": "input_value",
     "name": "ostart"
   },
   {
     "type": "input_value",
     "name": "ostop"
   },
   {
     "type": "input_value",
     "name": "ostart"
   },
   {
    "type": "input_value",
     "name": "value"
   },
   {
    "type": "input_value",
     "name": "istart"
   },
   {
    "type": "input_value",
     "name": "istop"
   },
   {
    "type": "input_value",
     "name": "istart"
   }
  ],
  "output": "Number",
  "colour": "#004098",
  "tooltip": "analog ",
  "helpUrl": ""
}
]);
