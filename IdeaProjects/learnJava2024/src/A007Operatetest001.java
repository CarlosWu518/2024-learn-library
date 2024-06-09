import java.util.Scanner;

/**
 * <p>Project: learnJava2024 - A007Operatetest001</p>
 * <p>2024-06-09 22:11:02</p>
 * <p>描述：数值拆封<p>
 *
 * @author carlos wu
 */
public class A007Operatetest001 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int bai = num / 100;
        int shi = num / 10 % 10;
        int ge = num % 10;
        System.out.println("百位：" + bai + " 十位：" + shi + " 个位：" + ge);
        String nums = String.valueOf(num);
        for (int i = 0; i < nums.length(); i++) {
            System.out.println(nums.charAt(i));
        }
    }
}
