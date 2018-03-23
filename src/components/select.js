import React, { Component } from 'react'
import { Upload, message, Button, Icon } from 'antd';

const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        var reader = new FileReader();
        console.log(info.file, info.fileList);
        var file = info.file.originFileObj;

        reader.onload = function(e) {
            var text = reader.result;
            console.log(text);
        }
        reader.readAsText(file,'utf-8');
    }
};

class Select extends React.Component {
    render() {
        return (
            <Upload {...props}>
                <Button>
                    <Icon type="upload" />选择文件
                </Button>
            </Upload>
        );
    }
}

export default Select;