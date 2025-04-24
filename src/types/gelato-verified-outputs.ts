import { Address, External$Address, Schemas$Address } from "./address";
import {
  External$GelatoDataVerifiedOutputsDate,
  GelatoDataVerifiedOutputsDate,
  Schemas$GelatoDataVerifiedOutputsDate,
} from "./gelato-data-verified-outputs-date";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type GelatoVerifiedOutputs = {
  address?: Address | undefined;
  /**
   * Point in Time
   */
  dob?: GelatoDataVerifiedOutputsDate | undefined;
  /**
   * The user's verified email address
   */
  email?: string | null | undefined;
  /**
   * The user's verified first name.
   */
  firstName?: string | null | undefined;
  /**
   * The user's verified id number.
   */
  idNumber?: string | null | undefined;
  /**
   * The user's verified id number type.
   */
  idNumberType?: ("br_cpf" | "sg_nric" | "us_ssn") | null | undefined;
  /**
   * The user's verified last name.
   */
  lastName?: string | null | undefined;
  /**
   * The user's verified phone number
   */
  phone?: string | null | undefined;
};

/**
 * @internal
 * GelatoVerifiedOutputs without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoVerifiedOutputs = {
  address?: External$Address | undefined;
  dob?: External$GelatoDataVerifiedOutputsDate | undefined;
  email?: string | null | undefined;
  first_name?: string | null | undefined;
  id_number?: string | null | undefined;
  id_number_type?: ("br_cpf" | "sg_nric" | "us_ssn") | null | undefined;
  last_name?: string | null | undefined;
  phone?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoVerifiedOutputs
 */
const SchemaIn$GelatoVerifiedOutputs: z.ZodType<
  GelatoVerifiedOutputs, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$Address.in.optional(),
    dob: Schemas$GelatoDataVerifiedOutputsDate.in.optional(),
    email: z.string().nullable().optional(),
    first_name: z.string().nullable().optional(),
    id_number: z.string().nullable().optional(),
    id_number_type: z
      .enum(["br_cpf", "sg_nric", "us_ssn"])
      .nullable()
      .optional(),
    last_name: z.string().nullable().optional(),
    phone: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      dob: "dob",
      email: "email",
      first_name: "firstName",
      id_number: "idNumber",
      id_number_type: "idNumberType",
      last_name: "lastName",
      phone: "phone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoVerifiedOutputs
 */
const SchemaOut$GelatoVerifiedOutputs: z.ZodType<
  External$GelatoVerifiedOutputs, // output type of this zod object
  z.ZodTypeDef,
  GelatoVerifiedOutputs // the object to be transformed
> = z
  .object({
    address: Schemas$Address.out.optional(),
    dob: Schemas$GelatoDataVerifiedOutputsDate.out.optional(),
    email: z.string().nullable().optional(),
    firstName: z.string().nullable().optional(),
    idNumber: z.string().nullable().optional(),
    idNumberType: z.enum(["br_cpf", "sg_nric", "us_ssn"]).nullable().optional(),
    lastName: z.string().nullable().optional(),
    phone: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      dob: "dob",
      email: "email",
      firstName: "first_name",
      idNumber: "id_number",
      idNumberType: "id_number_type",
      lastName: "last_name",
      phone: "phone",
    });
  });

export const Schemas$GelatoVerifiedOutputs = {
  in: SchemaIn$GelatoVerifiedOutputs,
  out: SchemaOut$GelatoVerifiedOutputs,
};
