 import React, { Component } from  'react';
 import NotefulsContext from '../NotefulsContext'
 import config from '../config'



 class AddNote extends Component {
  static contextType = NotefulsContext;

 ...

         url.value = ''
         desc.value = ''
         rating.value = ''
+        this.context.addBookmark(data)
         this.props.history.push('/')
-        this.props.onAddBookmark(data)
       })

 ...

    }

+  handleClickCancel = () => {
+    this.props.history.push('/')
+  };
+
   render() {
     const { error } = this.state
-    const { onClickCancel } = this.props
     return (

 ...

           <div className='AddBookmark__buttons'>
-            <button type='button' onClick={onClickCancel}>
+            <button type='button' onClick={this.handleClickCancel}>
               Cancel
             </button>