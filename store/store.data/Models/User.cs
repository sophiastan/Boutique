namespace Store.Data.Models
{
    public class User
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public Contact Contact { get; set; }

        public User() {
            Contact = new Contact();
        }
    }
}