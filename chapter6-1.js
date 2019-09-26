class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SLQueue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // SLQueue: Enqueue
    // Create SLQueue method enqueue(val) to add the given value to end of our queue. 
    // Remember, SLQueue uses a singly linked list (not an array).
    
    enqueue(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // SLQueue: Front
    // Create SLQueue method front() to return the value at front of our queue, without removing it.
    
    front(){
        return this.head.val;
    }
    
    // SLQueue: Is Empty
    // Create SLQueue method isEmpty() that returns whether our queue contains no values.
    
    isEmpty(){
        if(this.head == null){
            return true;
        }
        return false;
    }

    // SLQueue: Dequeue
    // Create SLQueue method dequeue() to remove and return value at front of queue. 
    // Remember, SLQueue uses singly linked list (not array).
    
     dequeue(){
         
     }
    
    
    
    
    


}

// SLQueue: Compare Queues
// Given two SLQueue objects, create a standalone function that returns whether they are equal. 
// Queues are equal only if they have equal elements in identical order. Allocate no other object, 
// and return the queues in their original condition upon exit.

function compare(slq1, slq2){
    var runner1 = slq1.head;
    var runner2 = slq2.head;
    while(runner1 || runner2){
        if((runner1 == null && runner2 != null) || (runner1 != null && runner2 == null)){
            return false;
        } else {
            if(runner1.val != runner2.val){
                return false;
            }
        }
        runner1 = runner1.next;
        runner2 = runner2.next;
    }
    return true;
}

var x = new SLQueue()
x.enqueue(5).enqueue(3).enqueue(7)
console.log(x.front())
console.log(x.isEmpty())

var y = new SLQueue()
y.enqueue(5).enqueue(3).enqueue(7)

console.log(compare(x,y))


