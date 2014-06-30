var http = require("http");

module.exports = App;

function App(){
    // ��������б�
    var middleList = this._middleList = [];

    // request�¼���Ӧ����
    function handle(req,res){


        if(middleList.length === 0){
            // ���û�й��ܲ��ʲô��������
        }else{

            // ѭ��ִ�в��
            var middleIndex = 0; // �������

            execMiddle();

            // ִ���������ʱ�����Զ�ִ����һ��middle�����
            // �������������ִ�У����ɲ�������ơ�
            function next(){
                middleIndex += 1;
                execMiddle();
            }

            // ִ�в������
            function execMiddle(){
                var middle = middleList[middleIndex];
                if(middle){
                    middle(req,res,next);
                }
            }        

        }


    }

    this._server = http.createServer(handle);

}

// ���빦��ջ
App.prototype.use = function(middle){
    this._middleList.push(middle);
}

// �����˿�
App.prototype.listen = function(){
    this._server.listen.apply(this._server,arguments);
}