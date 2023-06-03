#include <stdio.h>
int main(){
    float fahr,celecius;
    int lower, upper, step;

    lower = 0;
    upper = 300;
    step  = 20;
    printf("Farenhit to Celcius\n");
    printf("Farenhit\tCelcius\n");

    fahr = lower;
    while (fahr <=  upper) {
        celecius = (5.0/9.0) * (fahr-32.0) ;
        printf("%3.0f\t%6.1f\n",fahr, celecius);
        fahr = fahr + step;
    }

    printf("Celcius to Farenhit\n");
    printf("Celcius\tFarenhit\n");

    celecius = lower;
    while (celecius <= upper) {
        fahr = ((celecius*9.0)/5.0) + 32.0;
        printf("%3.0f\t%6.1f\n",celecius, fahr);
        celecius = celecius + step;
    }
}
