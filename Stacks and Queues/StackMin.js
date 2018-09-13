class Stack{
	constructor(){
		this.top = null
	}
	push(val){
		if(!this.top){
			this.top = new Node(val)
			return this
		}
		var node = new Node(val)
		node.next = this.top
		this.top = node
		return this
	}
	pop(){
		if(!this.top){
			return null
		}
		var val = this.top.value
		this.top = this.top.next
		return val
	}
	min(){
		if(!this.top){
			return null
		}
		var runner = this.top
		var min = this.top.value
		while(runner){
			if(runner.value < min){
				min = runner.value
			}
			runner = runner.next
		}
		return min
	}
}
class Node{
	constructor(val){
		this.value = val
		this.next = null
	}
}

var stack = new Stack()
console.log(stack.push(4).push(5).push(3).pop())
console.log(stack.min())
