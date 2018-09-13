// function BSTree() {
// 	this.root = null
// }
const util = require('util') //let's you inspect all nested objects

class BSTree{
	constructor(){
		this.root = null
	}
	insert(val){
		if(!this.root){
			this.root = new BSTNode(val)
			return this
		}
		else{
			var current = this.root
			while(current){
				if(val < current.val){
					if(current.left){
						current = current.left
					}
					else{
						current.left = new BSTNode(val)
						return this
					}
				}
				else if(val > current.val){
					if(current.right){
						current = current.right
					}
					else{
						current.right = new BSTNode(val)
						return this
					}
				}
				else{
					console.log("The value already exists in the tree")
					return this
				}
			}
		}
	}
	search(val){
		if(this.root){
			var current = this.root
			while(current){
				if(current.val == val){
					return true
				}
				else{
					if(val < current.val){
						current = current.left
					}
					else if(val > current.val){
						current = current.right
					}
				}
			}
			return false
		}
	}
	DFSpreorder(current = this.root){//if there is no parameter, it starts with this.root
		if(!current){
			return
		}
		console.log(current.val)
		this.DFSpreorder(current.left)
		this.DFSpreorder(current.right)
	}
	DFSpostorder(current = this.root){
		if(!current){
			return
		}
		this.DFSpostorder(current.left)
		this.DFSpostorder(current.right)
		console.log(current.val)
	}
	DFSinorder(current = this.root){
		if(!current){
			return
		}
		this.DFSinorder(current.left)
		console.log(current.val)
		this.DFSinorder(current.right)
	}
}
class BSTNode{
	constructor(val){
		this.val = val
		this.left = null
		this.right = null
	}
}

var tree = new BSTree()
tree.insert(2).insert(1).insert(4).insert(-1).insert(3).insert(2)
// console.log(util.inspect(tree, false, null))//for inspecting nested objects
tree.DFSinorder()
