# zk-SNARKs basics
Understanding:

This is a small proof of concept for me to understand zk-SNARKS and using them on Ethereum.

## Example Program

Supposing Axel is given a hash **H** of some value, and he wishes to have proof that Lissa know the value **s** that hashes to **H**. 

Normally Lissa would prove this by giving **s** to Axel, after which Axel would compute the hash and check that it equals **H**.

The main idea is not to reveal the value **s** to Axel, instead just proving that she knows the vale.

This can be achieved by using zk-SNARK

Describing this with a simple JS Function

```
function C(x, w) {

    return sha256(w) === x;

}
```

The program takes in a public hash **x** and a secret value **w** and returns true if the SHA-256 hash of **w** equals **x**