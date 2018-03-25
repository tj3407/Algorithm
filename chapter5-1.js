

class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class sList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    // List: Add Front
    // Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the 
    // first ListNode and a value, create a new node, assign it to the list head, and return a pointer 
    // to the new head node.
    addFront(value){
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }

    // List: Contains
    // Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. 
    // Given a ListNode pointer and a val, return whether val is found in any node in the list.
    
    contains(val){
        var current = this.head;
        while(current){
            if(current.val == val){
                return true;
            }
            current = current.next
        }
        return false;
    }

    // List: Remove Front
    // Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node 
    // in a list, remove the head node and return the new list head node. If list is empty, return null.
    
    removeFront(){
        if(this.head){
            var temp = this.head;
            this.head = this.head.next;
            temp.next = null;
            this.length--;
        } else {
            return null;
        }
        
        return this;

    }
    
    // SList: Length
    // July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. 
    // Create a function that accepts a pointer to the first list node, and returns number of nodes 
    // in that SList.
    
    listLength(){
        var counter = 0;
        var runner = this.head;
        while(runner){
            counter++;
            runner = runner.next;
        }
        console.log("Length: " + counter)
        return counter;
    }

    // SList: Display
    // Create display(node) for debugging that returns a string containing all list values. 
    // Build what you wish console.log(myList) did!
    
    display(){
        var runner = this.head;
        while(runner){
            console.log("Value: " + runner.val + " Next Node: " + runner.next);
            runner = runner.next;
        }
        return this;
        
    }

    // SList: Max
    // American Idol seems to air singers that are the best, and a few that seem like the worst! 
    // Create function max(node) to return list’s largest val.
    
    max(){
        var runner = this.head;
        var highest = runner.val;
        while(runner){
            if(highest <= runner.val){
                highest = runner.val;
            }
            runner = runner.next;
        }
        console.log("Highest: " + highest)
        return highest;
        // return this;
    }
    
    // SList: Min
    // Create min(node) to return list’s smallest val.
    
    min(){
        var runner = this.head;
        var lowest = runner.val;
        while(runner){
            if(lowest >= runner.val){
                lowest = runner.val;
            }
            runner = runner.next;
        }
        console.log("Lowest: " + lowest)
        return lowest;
        // return this;
    }
    
    // SList: Average
    // Create average(node) to return average val.
    average(){
        var runner = this.head;
        var sum = 0, counter = 0;
        while(runner){
            sum += runner.val;
            counter++;
            runner = runner.next;
        }
        console.log("Average: " + sum/counter)
        // return sum/counter;
        return this;
    }

    // SList: Back
    // Create a function that accepts a ListNode pointer and returns the last value in the list.
    
    back(){
        var runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        var last = runner.val;
        console.log("Last value: " + last);
        return last;
    }
    
    // SList: Remove Back
    // Create a standalone function that removes the last ListNode in the list and returns 
    // the new list.
    
    removeBack(){
        var runner = this.head;
        while(runner.next.next != null){
            runner = runner.next;
        }
        runner.next = null;
        this.length--;
        return this;
    }

    // SList: Add Back
    // Create a function that creates a ListNode with given value and inserts it at end of a linked list.

    addBack(value){
        var newNode = new Node();
        newNode.val = value
        var runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = newNode;
        newNode.next = null;
        return this;
    }

    // SList: Move Min to Front
    // Create a standalone function that locates the minimum value in a linked list, 
    // and moves that node to the front of the list. Return the new list, with all nodes still present, 
    // and all (except for the new head node) in their original order.
    
    minToFront(){
        var newNode = this.head;
        var runner = this.head;
        var beforeRunner = this.head;
        
        while(runner.next){
            if(newNode.val >= runner.next.val){
                newNode = runner.next;
                beforeRunner = runner;
            }
            runner = runner.next;
        }

        beforeRunner.next = newNode.next;
        newNode.next = this.head;
        this.head = newNode;
        console.log("Lowest", newNode.val)
        return this;
    }

    // SList: Move Max to Back
    // Create a standalone function that locates the maximum value in a linked list, and moves that node 
    // to the back of the list. Return the new list, with all nodes still present, and all in 
    // their original order except for the node you moved to the end of the singly linked list.
    
    maxToBack(){
        var newNode = this.head;
        var runner = this.head;
        var beforeRunner = this.head;
        
        while(runner.next){
            if(newNode.val <= runner.next.val){
                newNode = runner.next;
                beforeRunner = runner;
            }
            runner = runner.next;
        }

        beforeRunner.next = newNode.next;
        // newNode.next = this.head;
        runner.next = newNode;
        newNode.next = null;
        console.log(runner.val)
        console.log("Highest", newNode.val)
        return this;
    }
    
}


var list = new sList();
var numList = new sList();
numList.addFront(2).addFront(3).addFront(5).addFront(2).addFront(1).addFront(9).average().display().listLength();
numList.removeBack().display().listLength()
numList.addBack(5).display().listLength()
numList.minToFront().display().listLength()
numList.maxToBack().display().listLength();