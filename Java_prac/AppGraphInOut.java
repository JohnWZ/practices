import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class AppGraphInOut
{
    public static void main(String args[])
    {
        // construct a frame in main 
        new AppFrame();
    }
}

// 继承JFrame
class AppFrame extends JFrame
{
    // 定义一个文本框，按钮和一个label
    JTextField in = new JTextField(10);
    JButton btn = new JButton("Square");
    JLabel out = new JLabel("Result");

    // 构造函数
    public AppFrame()
    {
        // 设定布局方式，flow就是把所有元素依次放进去，放不下就换行
        setLayout(new FlowLayout());
        // 在内容面板上将它们添加进去
        getContentPane().add(in);
        getContentPane().add(btn);
        getContentPane().add(out);
        // 给button增加一个事件监听器
        btn.addActionListener(new BtnActionAdapter());
        // 设置窗口大小
        setSize(400,100);
        // 设置默认关闭行为
        setDefaultCloseOperation(DISPOSE_ON_CLOSE);
        // 显示这个窗口
        setVisible(true);
    }

    class BtnActionAdapter implements ActionListener
    {
        public void actionPerformed(ActionEvent e)
        {
            // 从文本框里面得到文本
            String s = in.getText();
            // parse it to double type
            double d = Double.parseDouble(s);
            double sq = d * d;
            // output it to label field
            out.setText("The square of " + d + " is: " + sq);
        }
    }
}

