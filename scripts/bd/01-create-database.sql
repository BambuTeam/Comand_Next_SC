CREATE TABLE users (
    user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    -- Add other columns as needed
);

CREATE TABLE comanda (
  comanda_id UUID DEFAULT uuid_generate_v4() NOT NULL,
  client VARCHAR(255) NOT NULL,
  table_id VARCHAR(255) NOT NULL,
  user_id UUID NOT NULL,
  service_type INT NOT NULL,
  start_date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  last_update_date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  number_of_customers INTEGER NOT NULL,
  room_or_table_number VARCHAR(20) NOT NULL,
  notes TEXT,
  order_type INT NOT NULL,
  PRIMARY KEY (comanda_id),
  FOREIGN KEY (user_id) REFERENCES users (user_id)

)

CREATE TABLE orders (
    order_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    comanda_id UUID,
    user_id UUID,
    order_date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    last_update_date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    status VARCHAR(50),
    notes TEXT,
    FOREIGN KEY (comanda_id) REFERENCES comandas (comanda_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

