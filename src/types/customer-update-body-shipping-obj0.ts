import {
  CustomerUpdateBodyShippingObj0Address,
  External$CustomerUpdateBodyShippingObj0Address,
  Schemas$CustomerUpdateBodyShippingObj0Address,
} from "./customer-update-body-shipping-obj0-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerUpdateBodyShippingObj0
 */
export type CustomerUpdateBodyShippingObj0 = {
  address: CustomerUpdateBodyShippingObj0Address;
  name: string;
  phone?: string | undefined;
};

/**
 * @internal
 * CustomerUpdateBodyShippingObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerUpdateBodyShippingObj0 = {
  address: External$CustomerUpdateBodyShippingObj0Address;
  name: string;
  phone?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerUpdateBodyShippingObj0
 */
const SchemaIn$CustomerUpdateBodyShippingObj0: z.ZodType<
  CustomerUpdateBodyShippingObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$CustomerUpdateBodyShippingObj0Address.in,
    name: z.string(),
    phone: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
      phone: "phone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerUpdateBodyShippingObj0
 */
const SchemaOut$CustomerUpdateBodyShippingObj0: z.ZodType<
  External$CustomerUpdateBodyShippingObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerUpdateBodyShippingObj0 // the object to be transformed
> = z
  .object({
    address: Schemas$CustomerUpdateBodyShippingObj0Address.out,
    name: z.string(),
    phone: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
      phone: "phone",
    });
  });

export const Schemas$CustomerUpdateBodyShippingObj0 = {
  in: SchemaIn$CustomerUpdateBodyShippingObj0,
  out: SchemaOut$CustomerUpdateBodyShippingObj0,
};
