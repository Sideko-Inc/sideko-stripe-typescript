import {
  External$SourceCreateBodyOwnerAddress,
  Schemas$SourceCreateBodyOwnerAddress,
  SourceCreateBodyOwnerAddress,
} from "./source-create-body-owner-address";
import { types } from "@sideko-inc/stripe";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information about the owner of the payment instrument that may be used or required by particular source types.
 */
export type SourceCreateBodyOwner = {
  address?: SourceCreateBodyOwnerAddress | undefined;
  email?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
};

/**
 * @internal
 * SourceCreateBodyOwner without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceCreateBodyOwner = {
  address?: External$SourceCreateBodyOwnerAddress | undefined;
  email?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceCreateBodyOwner
 */
const SchemaIn$SourceCreateBodyOwner: z.ZodType<
  SourceCreateBodyOwner, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$SourceCreateBodyOwnerAddress.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceCreateBodyOwner
 */
const SchemaOut$SourceCreateBodyOwner: z.ZodType<
  External$SourceCreateBodyOwner, // output type of this zod object
  z.ZodTypeDef,
  SourceCreateBodyOwner // the object to be transformed
> = z
  .object({
    address: Schemas$SourceCreateBodyOwnerAddress.out.optional(),
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

export const Schemas$SourceCreateBodyOwner = {
  in: SchemaIn$SourceCreateBodyOwner,
  out: SchemaOut$SourceCreateBodyOwner,
};
