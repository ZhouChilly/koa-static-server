import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int n1 = in.nextInt();
    int n2 = in.nextInt();
    int k1 = in.nextInt();
    int k2 = in.nextInt();
    if (n1 > n2) {
      System.out.println("First");
    } else {
      System.out.println("Second");
    }
  }
}
