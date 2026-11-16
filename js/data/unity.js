window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "unity",
  order: 22,
  group: "Frameworks & Engines",
  name: "Unity",
  color: "#6a6f7a",
  tagline: "A game engine for 2D and 3D games. You write the behavior in C# scripts.",
  level: "Intermediate",
  usedFor: "video games, mobile games, 3D apps, simulations",
  ext: ".cs",
  comment: "//",
  kw: ["using", "class", "public", "private", "void", "int", "float", "bool", "string", "if", "else", "for", "foreach", "while", "return", "new", "this", "true", "false", "null", "static", "const", "namespace", "var"],
  types: ["MonoBehaviour", "GameObject", "Transform", "Rigidbody", "Collider", "Vector3", "Vector2", "Quaternion", "Input", "Time", "Debug", "Log", "Start", "Update", "FixedUpdate", "Awake", "OnCollisionEnter", "OnTriggerEnter", "Instantiate", "Destroy", "SerializeField", "KeyCode", "GetAxis", "GetKeyDown", "deltaTime", "position", "Translate", "AddForce", "CompareTag", "SceneManager"],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "A script is a C# class that you attach to an object in the scene. Unity calls Start once when the game begins and Update on every frame.",
      code: "using UnityEngine;\n\npublic class Player : MonoBehaviour\n{\n    public float speed = 5f;            // shows in the Inspector\n    private int score = 0;\n\n    void Start()                        // runs once at the beginning\n    {\n        Debug.Log(\"Hello, World!\");\n    }\n\n    void Update()                       // runs every frame\n    {\n        float x = Input.GetAxis(\"Horizontal\");   // A/D or arrow keys\n        transform.Translate(x * speed * Time.deltaTime, 0, 0);\n\n        if (Input.GetKeyDown(KeyCode.Space))\n        {\n            score++;\n            Debug.Log(\"Score: \" + score);\n        }\n    }\n}"
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "Download Unity Hub from unity.com. In the Hub, install an Editor version (choose the recommended LTS release) and create a new project from a template, for example 3D or 2D. To make a script, right-click in the Project window and choose Create > C# Script. Drag it onto an object in the scene, then press the Play button at the top to run your game.",
      shell: true,
      code: `# 1. Install Unity Hub, then install an Editor (LTS version)
# 2. New project > choose a template (3D or 2D) > Create
# 3. Hierarchy window: right-click > 3D Object > Cube
# 4. Project window: right-click > Create > C# Script, name it "Player"
# 5. Drag the script onto the Cube
# 6. Open the script (double-click), write code, save
# 7. Press Play at the top of the editor`
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "The file name must match the class name (Player.cs for class Player). Debug.Log prints a message in the Console window (Window > General > Console). Start runs once when you press Play.",
      code: `using UnityEngine;

public class Player : MonoBehaviour
{
    void Start()
    {
        Debug.Log("Hello, World!");
    }
}`
    },
    {
      id: "variables",
      title: "Variables & the Inspector",
      text: "C# needs a type for every variable: int, float (write 5f), bool and string. A public variable, or a private one marked with [SerializeField], appears in the Inspector, so you can change it without touching the code. A GameObject variable lets you point to other objects by dragging them in.",
      code: `using UnityEngine;

public class Enemy : MonoBehaviour
{
    public float speed = 3f;              // edit in the Inspector
    [SerializeField] private int health = 100;
    public string enemyName = "Slime";
    public GameObject target;             // drag an object here

    void Start()
    {
        Debug.Log(enemyName + " has " + health + " health");
    }
}`
    },
    {
      id: "control",
      title: "Input & movement",
      text: "Update runs every frame, so read the keyboard there. Multiply movement by Time.deltaTime, so the speed is the same on fast and slow computers. GetAxis gives -1 to 1 for the arrow keys or WASD. GetKeyDown is true only in the frame when the key is pressed.",
      code: `using UnityEngine;

public class Mover : MonoBehaviour
{
    public float speed = 5f;

    void Update()
    {
        float x = Input.GetAxis("Horizontal");
        float z = Input.GetAxis("Vertical");
        Vector3 move = new Vector3(x, 0, z);
        transform.Translate(move * speed * Time.deltaTime);

        if (Input.GetKeyDown(KeyCode.Space))
        {
            Debug.Log("Jump!");
        }
    }
}`
    },
    {
      id: "functions",
      title: "Methods & components",
      text: "Put your own code into methods, with a return type first (void if nothing is returned). Every object is made of components, like Transform and Rigidbody. Use GetComponent to reach a component. A Rigidbody adds physics, so the object can fall, bounce and be pushed by forces.",
      code: `using UnityEngine;

public class Jumper : MonoBehaviour
{
    public float jumpForce = 6f;
    private Rigidbody rb;

    void Start()
    {
        rb = GetComponent<Rigidbody>();       // add a Rigidbody in the editor first
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space)) Jump();
    }

    void Jump()
    {
        rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
    }
}`
    },
    {
      id: "prefabs",
      title: "Prefabs & spawning",
      text: "A prefab is a saved object that you can create many times, such as a bullet or an enemy. Drag an object from the Hierarchy into the Project window to make one. Use Instantiate to create a copy while the game runs and Destroy to remove it, optionally after a number of seconds.",
      code: `using UnityEngine;

public class Shooter : MonoBehaviour
{
    public GameObject bulletPrefab;           // drag the prefab here
    public Transform firePoint;

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Mouse0))
        {
            GameObject bullet = Instantiate(bulletPrefab, firePoint.position, firePoint.rotation);
            Destroy(bullet, 3f);              // remove after 3 seconds
        }
    }
}`
    },
    {
      id: "collisions",
      title: "Collisions",
      text: "Objects need a Collider component to touch each other, and at least one of them needs a Rigidbody. OnCollisionEnter runs when two solid objects hit. If you tick Is Trigger on the collider, the object becomes a zone that you can walk through, and OnTriggerEnter runs instead. Give objects a Tag to know what you hit.",
      code: `using UnityEngine;

public class Coin : MonoBehaviour
{
    void OnTriggerEnter(Collider other)           // Is Trigger is ticked
    {
        if (other.CompareTag("Player"))
        {
            Debug.Log("Coin collected");
            Destroy(gameObject);
        }
    }
}

// On a solid object:
// void OnCollisionEnter(Collision collision)
// {
//     Debug.Log("Hit " + collision.gameObject.name);
// }`
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Unity is built from GameObjects and components: you make small scripts that each do one job, and combine them. Use the Console to find errors (red messages show the file and line). Never use Find or GetComponent inside Update, store the result in Start instead.",
      code: `using UnityEngine;

public class Health : MonoBehaviour
{
    public int hp = 100;

    public void TakeDamage(int amount)
    {
        hp -= amount;
        if (hp <= 0) Die();
    }

    void Die()
    {
        Debug.Log(name + " died");
        Destroy(gameObject);
    }
}

// Another script calls it:
//   other.GetComponent<Health>().TakeDamage(10);`
    }
  ]
});
