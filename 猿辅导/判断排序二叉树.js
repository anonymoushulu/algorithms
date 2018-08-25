function Btree() {
    // 节点对象
    var Node = function(key) {
        this.key = key;
        this.right = null;
        this.left = null;
    };
    // 初始化根节点
    var root = null;

    var insertnode = function(node, newnode) {
        // 判断插到左子树中还是右子树中
        if(newnode.key < node.key) {
            if(node.left === null) {
                node.left = newnode;
            } else {
                insertnode(node.left, newnode);
            }
        } else {
            if(node.right === null) {
                node.right = newnode;
            } else {
                insertnode(node.right, newnode);
            }
        }
    };
    this.insert = function(key) {
        var newNode = new Node(key);
        // 判断插入的是否是根节点
        if(root === null) {
            root = newNode;
        } else {
            insertnode(root, newNode);
        }
    };

    var zhongxu = function(node, callback) {
        if(node !== null) {
            zhongxu(node.left, callback);
            callback(node.key);
            zhongxu(node.right, callback);
        }
    };

    this.zhongxubianli = function(callback) {
        zhongxu(root, callback);
    }
}

var nodes = [8,2,4,5,7,13,11,9,14];
var btree = new Btree();
nodes.forEach(function(key) {
    btree.insert(key);
})
var callback = function(key) {
    console.log(key);
};
btree.zhongxubianli(callback);