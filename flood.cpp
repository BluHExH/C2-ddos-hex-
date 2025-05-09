
#include<iostream>
#include<stdlib.h>
using namespace std;
int main() {
    while(true) {
        system("curl https://example.com > /dev/null 2>&1 &");
    }
    return 0;
}
