
import java.util.Scanner;

public class Test1 {

	public static void main(String[] args) {
		System.out.println("一つ目の値を入力してください");
		try {
			Scanner sc1 = new Scanner(System.in );
			int num1 = sc1.nextInt();
			System.out.println("二つ目の値を入力してください");

			try {
			Scanner sc2 = new Scanner(System.in );
			int num2 = sc2.nextInt();

			int total = num1 + num2;
			System.out.println("合計："+ total);
			int average = (num1 + num2) /2;
			System.out.println("平均："+ average);
			sc1.close();
			sc2.close();
			}catch(java.util.InputMismatchException e){
				System.out.println("数字を入力してください");
			}
		}catch(java.util.InputMismatchException e){
			System.out.println("数字を入力してください");
		}
	}
}
