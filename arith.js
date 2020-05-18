class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.items.length == 0) return "Underflow";
        return this.items.pop();
    }
    top() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}
function prec(c) {
    if (c == '*' || c == '/') return 2;
    else if (c == '+' || c == '-') return 1;
    else return -1;
}
function postFixEvaluation(exp) {
    // console.log(exp);
    let stack = new Stack();
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];
        if (!isNaN(c))
            stack.push(c - '0');
        else {
            let val1 = stack.pop();
            let val2 = stack.pop();
            if (val1 == "Underflow" || val2 == "Underflow")
                return "Can't perform postfix evaluation";
            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;

                case '-':
                    stack.push(val2 - val1);
                    break;

                case '/':
                    stack.push(val2 / val1);
                    break;

                case '*':
                    stack.push(val2 * val1);
                    break;
            }
        }
    }
    let x = stack.pop();
    let ans = x.toFixed(3);
    return ans;
}
function infixToPostfix(s) {
    let st = new Stack();
    st.push('N');
    let l = s.length;
    let ns = '', c;
    for (let i = 0; i < l; i++) {
        if ((s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)) {
            ns += s[i];
            // console.log(1);
        }
        else if (s[i] == '(') {
            st.push('(');
            // console.log(2);
        }
        else if (s[i] == ')') {
            // console.log(3);
            while (st.top() != 'N' && st.top() != '(') {
                c = st.top();
                st.pop();
                ns += c;
            }
            if (st.top() == '(') {
                c = st.top();
                st.pop();
                // console.log(4);
            }
        }
        else {
            // console.log(5);
            while (st.top() != 'N' && prec(s[i]) <= prec(st.top())) {
                c = st.top();
                st.pop();
                ns += c;
            }
            // console.log("s", s[i]);
            st.push(s[i]);
        }

    }
    // console.log(6);
    while (st.top() != 'N') {
        c = st.top();
        st.pop();
        ns += c;
    }
    // console.log(ns);
    return ns;
    // postFixEvaluation(ns);
}
export function arith(exp) {
    let x = infixToPostfix(exp);
    let y = postFixEvaluation(x);
    return y;
}
// let a = infixToPostfix("33*6");
// let b = postFixEvaluation(a);
// console.log(b);
