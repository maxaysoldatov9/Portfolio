using System;
class Program
{
    static void Main()
    {
        Console.Write("Введите a: ");
        double a = Convert.ToDouble(Console.ReadLine());
        Console.Write("Введите b: ");
        double b = Convert.ToDouble(Console.ReadLine());
        Console.Write("Введите c: ");
        double c = Convert.ToDouble(Console.ReadLine());
        double y = (Math.Pow(c + b, 3) + Math.Sqrt(a / 9)) / (b + c * b);
        Console.WriteLine("y = " + y);
    }
}