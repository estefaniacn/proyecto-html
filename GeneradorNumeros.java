import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class GeneradorNumeros {

    public static void main(String[] args) {
        // Lista para almacenar los números
        List<Integer> numeros = new ArrayList<>();

        // Objeto Random
        Random random = new Random();

        // Generar 2000 números aleatorios entre 0 y 100
        for (int i = 0; i < 2000; i++) {
            int numero = random.nextInt(101); // 0 a 100 inclusive
            numeros.add(numero);
        }

        // Mostrar los números por consola
        for (int num : numeros) {
            System.out.println(num);
        }
    }
}