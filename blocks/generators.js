Blockly.Python['map'] = function(block) {
Blockly.Python.definitions_['add_def'] = '***';

  //var dropdown_trig = block.getFieldValue('trig');
  var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var istart = Blockly.Python.valueToCode(block, 'istart', Blockly.Python.ORDER_ATOMIC);
  var istop = Blockly.Python.valueToCode(block, 'istop', Blockly.Python.ORDER_ATOMIC);
  var ostart = Blockly.Python.valueToCode(block, 'ostart', Blockly.Python.ORDER_ATOMIC);
  var ostop = Blockly.Python.valueToCode(block, 'ostop', Blockly.Python.ORDER_ATOMIC);
  //var code = `Ultrasonic.read(32)`;
  var code = `map(${value},${istart},${istop},${ostart},${ostop})`;
  return [code, Blockly.Python.ORDER_NONE];
};
