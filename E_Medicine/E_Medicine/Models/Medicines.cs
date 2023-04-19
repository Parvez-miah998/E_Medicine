namespace E_Medicine.Models
{
    public class Medicines
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Manufacturer { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal Discount { get; set; }
        public int Quantity { get; set; }
        public DateTime EXPDate { get; set; }
        public string ImageUrl { get; set; }
        public int Status { get; set; }
        public String Type { get; set; }
    }
}
