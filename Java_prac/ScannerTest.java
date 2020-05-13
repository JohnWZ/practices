import java.util.Scanner;
class ScannerTest{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input a number:");
        int a = scanner.nextInt();
        System.out.printf("The square of %d is %d \n",a,a*a);
    }
}