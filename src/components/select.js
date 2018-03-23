import React, { Component } from 'react'
import { Upload, message, Button, Icon } from 'antd';

const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        alert("df");
        if (info.file && info.file.length > 0) {
            //下面这一句相当于JQuery的：var file =$("#upload").prop('files')[0];
            var file = info.file;
            if (window.FileReader) {
                var reader = new FileReader();
                reader.onloadend = function (evt) {
                    if (evt.target.readyState == FileReader.DONE) {
                        callback(evt.target.result);
                    }
                };
                // 包含中文内容用gbk编码
                reader.readAsText(file, 'gbk');
            }
        }
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