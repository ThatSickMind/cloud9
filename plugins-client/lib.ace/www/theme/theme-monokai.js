define("ace/theme/monokai",["require","exports","module","ace/lib/dom"],function(a,b,c){b.isDark=!0,b.cssClass="ace-monokai",b.cssText=".ace-monokai .ace_editor {  border: 2px solid rgb(159, 159, 159);}.ace-monokai .ace_editor.ace_focus {  border: 2px solid #327fbd;}.ace-monokai .ace_gutter {  background: #3A3E35  ;  color: rgba(255,255,255,.8);}.ace-monokai .ace_print_margin {  width: 1px;  background: #e8e8e8;}.ace-monokai .ace_scroller {  background-color: #272822;}.ace-monokai .ace_text-layer {  cursor: text;  color: #F8F8F2;}.ace-monokai .ace_cursor {  border-left: 2px solid #F8F8F0;}.ace-monokai .ace_cursor.ace_overwrite {  border-left: 0px;  border-bottom: 1px solid #F8F8F0;}.ace-monokai .ace_marker-layer .ace_selection {  background: #49483E;}.ace-monokai.multiselect .ace_selection.start {  box-shadow: 0 0 3px 0px #272822;  border-radius: 2px;}.ace-monokai .ace_marker-layer .ace_step {  background: rgb(198, 219, 174);}.ace-monokai .ace_marker-layer .ace_bracket {  margin: -1px 0 0 -1px;  border: 1px solid #49483E;}.ace-monokai .ace_marker-layer .ace_active_line{  background: #49483E;}.ace-monokai .ace_gutter_active_line{  background: #49483E;}.ace-monokai .ace_marker-layer .ace_selected_word {  border: 1px solid #49483E;}.ace-monokai .ace_invisible {  color: #49483E;}.ace-monokai .ace_keyword, .ace-monokai .ace_meta {  color:#F92672;}.ace-monokai .ace_constant.ace_language {  color:#AE81FF;}.ace-monokai .ace_constant.ace_numeric {  color:#AE81FF;}.ace-monokai .ace_constant.ace_other {  color:#AE81FF;}.ace-monokai .ace_invalid {  color:#F8F8F0;background-color:#F92672;}.ace-monokai .ace_invalid.ace_deprecated {  color:#F8F8F0;background-color:#AE81FF;}.ace-monokai .ace_support.ace_constant {  color:#66D9EF;}.ace-monokai .ace_fold {    background-color: #A6E22E;    border-color: #F8F8F2;}.ace-monokai .ace_support.ace_function {  color:#66D9EF;}.ace-monokai .ace_storage {  color:#F92672;}.ace-monokai .ace_storage.ace_type,  .ace-monokai .ace_support.ace_type{  font-style:italic;color:#66D9EF;}.ace-monokai .ace_variable {  color:#A6E22E;}.ace-monokai .ace_variable.ace_parameter {  font-style:italic;color:#FD971F;}.ace-monokai .ace_string {  color:#E6DB74;}.ace-monokai .ace_comment {  color:#75715E;}.ace-monokai .ace_entity.ace_other.ace_attribute-name {  color:#A6E22E;}.ace-monokai .ace_entity.ace_name.ace_function {  color:#A6E22E;}.ace-monokai .ace_markup.ace_underline {    text-decoration:underline;}";var d=a("../lib/dom");d.importCssString(b.cssText,b.cssClass)})