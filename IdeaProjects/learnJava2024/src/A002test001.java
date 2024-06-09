/**
 * <p>Project: learnJava2024 - A002test001</p>
 * <p>Powered by aix On 2024-06-09 20:32:46</p>
 * <p>描述：变量小练习<p>
 *
 * @author carlos wu
 */
public class A002test001 {
    public static void main(String[] args) {
        //一开始没有乘客
        int count = 0;
        //第一站乘客上车
        count = count + 1;
        //第二站乘客上车两位下车一位
        count = count + 2 - 1;
        //第三站乘客上车两位下车一位
        count = count + 2 - 1;
        //第四站下来一位乘客
        count = count - 1;
        //第五站上来一位乘客
        count = count + 1;
        System.out.println("乘客数量：" + count);


    }
}
