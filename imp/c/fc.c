#include<stdio.h>
int main(){
  int c;
  while ((c = getchar()) != EOF) {
    putchar(c);
    if(c == EOF){
      printf("EOF reached :\n");
    }
    else {
      printf("EOF not reached :\n");
    }
  }
  return 0;
}
