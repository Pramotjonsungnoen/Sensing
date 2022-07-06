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
 "type": "map",
 "message0": "map %1  ( for high%2  low %3  to low %4  high %5)  ",
 "args0": [
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
    "name": "ostart"
   },
   {
    "type": "input_value",
     "name": "ostop"
   }
  ],
  "output": "Number",
  "colour": "#004098",
  "tooltip": "analog ",
  "helpUrl": ""
}
]);
