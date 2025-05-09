
#include<stdio.h>
#include<stdlib.h>
int main() {
    while(1) {
        system("curl https://example.com > /dev/null 2>&1 &");
    }
    return 0;
}
