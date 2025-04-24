import {
  CustomerSourceUpdateBodyOwnerAddress,
  External$CustomerSourceUpdateBodyOwnerAddress,
  Schemas$CustomerSourceUpdateBodyOwnerAddress,
} from "./customer-source-update-body-owner-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSourceUpdateBodyOwner
 */
export type CustomerSourceUpdateBodyOwner = {
  address?: CustomerSourceUpdateBodyOwnerAddress | undefined;
  email?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
};

/**
 * @internal
 * CustomerSourceUpdateBodyOwner without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSourceUpdateBodyOwner = {
  address?: External$CustomerSourceUpdateBodyOwnerAddress | undefined;
  email?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSourceUpdateBodyOwner
 */
const SchemaIn$CustomerSourceUpdateBodyOwner: z.ZodType<
  CustomerSourceUpdateBodyOwner, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$CustomerSourceUpdateBodyOwnerAddress.in.optional(),
    email: z.string().optional(),
    name: z.string().optional(),
    phone: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSourceUpdateBodyOwner
 */
const SchemaOut$CustomerSourceUpdateBodyOwner: z.ZodType<
  External$CustomerSourceUpdateBodyOwner, // output type of this zod object
  z.ZodTypeDef,
  CustomerSourceUpdateBodyOwner // the object to be transformed
> = z
  .object({
    address: Schemas$CustomerSourceUpdateBodyOwnerAddress.out.optional(),
    email: z.string().optional(),
    name: z.string().optional(),
    phone: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
    });
  });

export const Schemas$CustomerSourceUpdateBodyOwner = {
  in: SchemaIn$CustomerSourceUpdateBodyOwner,
  out: SchemaOut$CustomerSourceUpdateBodyOwner,
};
