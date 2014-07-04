module.exports = pathRegexp;
function pathRegexp(path) {

    var paramNames = [];

    path = path

        // ��������ð� * �滻��������ʽ�� [0-9a-zA-Z\-_]* ��ʽ��
        .replace(/((\*{1}(?=\/))|(\*{1}(?=$)))/g, "[0-9a-zA-Z\-_]*")

        // ��������ǰ� :xxx ����ʽ�滻��  [0-9a-zA-Z\-_]*  ������ʽ��ʽ��
        .replace(/(:(.*?(?=\/)))|(:(.*?(?=$)))/g, "[0-9a-zA-Z\-_]*")

        // �� /article/:id/ ��ת��Ϊ /article/:id
        .replace(/\/$/g, "")

        // �� / ת��Ϊ \/ ����Ϊ�����ַ�����ʽ�����ͨ�� new RegExp(path)
        // ����ʱ������Ҫ�������ת����
        .replace(/\//g, "\\\/")

    var regexp = new RegExp("^" + path + "\\/?$");
    regexp.paramNames = paramNames;
    return regexp;
}