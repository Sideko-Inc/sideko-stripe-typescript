import {
  External$IssuingDisputeCreateBodyEvidenceCanceledObj0,
  IssuingDisputeCreateBodyEvidenceCanceledObj0,
  Schemas$IssuingDisputeCreateBodyEvidenceCanceledObj0,
} from "./issuing-dispute-create-body-evidence-canceled-obj0";
import {
  External$IssuingDisputeCreateBodyEvidenceDuplicateObj0,
  IssuingDisputeCreateBodyEvidenceDuplicateObj0,
  Schemas$IssuingDisputeCreateBodyEvidenceDuplicateObj0,
} from "./issuing-dispute-create-body-evidence-duplicate-obj0";
import {
  External$IssuingDisputeCreateBodyEvidenceFraudulentObj0,
  IssuingDisputeCreateBodyEvidenceFraudulentObj0,
  Schemas$IssuingDisputeCreateBodyEvidenceFraudulentObj0,
} from "./issuing-dispute-create-body-evidence-fraudulent-obj0";
import {
  External$IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0,
  IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0,
  Schemas$IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0,
} from "./issuing-dispute-create-body-evidence-merchandise-not-as-described-obj0";
import {
  External$IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0,
  IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0,
  Schemas$IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0,
} from "./issuing-dispute-create-body-evidence-no-valid-authorization-obj0";
import {
  External$IssuingDisputeCreateBodyEvidenceNotReceivedObj0,
  IssuingDisputeCreateBodyEvidenceNotReceivedObj0,
  Schemas$IssuingDisputeCreateBodyEvidenceNotReceivedObj0,
} from "./issuing-dispute-create-body-evidence-not-received-obj0";
import {
  External$IssuingDisputeCreateBodyEvidenceOtherObj0,
  IssuingDisputeCreateBodyEvidenceOtherObj0,
  Schemas$IssuingDisputeCreateBodyEvidenceOtherObj0,
} from "./issuing-dispute-create-body-evidence-other-obj0";
import {
  External$IssuingDisputeCreateBodyEvidenceServiceNotAsDescribedObj0,
  IssuingDisputeCreateBodyEvidenceServiceNotAsDescribedObj0,
  Schemas$IssuingDisputeCreateBodyEvidenceServiceNotAsDescribedObj0,
} from "./issuing-dispute-create-body-evidence-service-not-as-described-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Evidence provided for the dispute.
 */
export type IssuingDisputeCreateBodyEvidence = {
  canceled?:
    | (IssuingDisputeCreateBodyEvidenceCanceledObj0 | string)
    | undefined;
  duplicate?:
    | (IssuingDisputeCreateBodyEvidenceDuplicateObj0 | string)
    | undefined;
  fraudulent?:
    | (IssuingDisputeCreateBodyEvidenceFraudulentObj0 | string)
    | undefined;
  merchandiseNotAsDescribed?:
    | (IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0 | string)
    | undefined;
  noValidAuthorization?:
    | (IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0 | string)
    | undefined;
  notReceived?:
    | (IssuingDisputeCreateBodyEvidenceNotReceivedObj0 | string)
    | undefined;
  other?: (IssuingDisputeCreateBodyEvidenceOtherObj0 | string) | undefined;
  reason?:
    | (
        | "canceled"
        | "duplicate"
        | "fraudulent"
        | "merchandise_not_as_described"
        | "no_valid_authorization"
        | "not_received"
        | "other"
        | "service_not_as_described"
      )
    | undefined;
  serviceNotAsDescribed?:
    | (IssuingDisputeCreateBodyEvidenceServiceNotAsDescribedObj0 | string)
    | undefined;
};

/**
 * @internal
 * IssuingDisputeCreateBodyEvidence without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeCreateBodyEvidence = {
  canceled?:
    | (External$IssuingDisputeCreateBodyEvidenceCanceledObj0 | string)
    | undefined;
  duplicate?:
    | (External$IssuingDisputeCreateBodyEvidenceDuplicateObj0 | string)
    | undefined;
  fraudulent?:
    | (External$IssuingDisputeCreateBodyEvidenceFraudulentObj0 | string)
    | undefined;
  merchandise_not_as_described?:
    | (
        | External$IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0
        | string
      )
    | undefined;
  no_valid_authorization?:
    | (
        | External$IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0
        | string
      )
    | undefined;
  not_received?:
    | (External$IssuingDisputeCreateBodyEvidenceNotReceivedObj0 | string)
    | undefined;
  other?:
    | (External$IssuingDisputeCreateBodyEvidenceOtherObj0 | string)
    | undefined;
  reason?:
    | (
        | "canceled"
        | "duplicate"
        | "fraudulent"
        | "merchandise_not_as_described"
        | "no_valid_authorization"
        | "not_received"
        | "other"
        | "service_not_as_described"
      )
    | undefined;
  service_not_as_described?:
    | (
        | External$IssuingDisputeCreateBodyEvidenceServiceNotAsDescribedObj0
        | string
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeCreateBodyEvidence
 */
const SchemaIn$IssuingDisputeCreateBodyEvidence: z.ZodType<
  IssuingDisputeCreateBodyEvidence, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    canceled: z
      .union([
        Schemas$IssuingDisputeCreateBodyEvidenceCanceledObj0.in,
        z.string(),
      ])
      .optional(),
    duplicate: z
      .union([
        Schemas$IssuingDisputeCreateBodyEvidenceDuplicateObj0.in,
        z.string(),
      ])
      .optional(),
    fraudulent: z
      .union([
        Schemas$IssuingDisputeCreateBodyEvidenceFraudulentObj0.in,
        z.string(),
      ])
      .optional(),
    merchandise_not_as_described: z
      .union([
        Schemas$IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0.in,
        z.string(),
      ])
      .optional(),
    no_valid_authorization: z
      .union([
        Schemas$IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0.in,
        z.string(),
      ])
      .optional(),
    not_received: z
      .union([
        Schemas$IssuingDisputeCreateBodyEvidenceNotReceivedObj0.in,
        z.string(),
      ])
      .optional(),
    other: z
      .union([Schemas$IssuingDisputeCreateBodyEvidenceOtherObj0.in, z.string()])
      .optional(),
    reason: z
      .enum([
        "canceled",
        "duplicate",
        "fraudulent",
        "merchandise_not_as_described",
        "no_valid_authorization",
        "not_received",
        "other",
        "service_not_as_described",
      ])
      .optional(),
    service_not_as_described: z
      .union([
        Schemas$IssuingDisputeCreateBodyEvidenceServiceNotAsDescribedObj0.in,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      canceled: "canceled",
      duplicate: "duplicate",
      fraudulent: "fraudulent",
      merchandise_not_as_described: "merchandiseNotAsDescribed",
      no_valid_authorization: "noValidAuthorization",
      not_received: "notReceived",
      other: "other",
      reason: "reason",
      service_not_as_described: "serviceNotAsDescribed",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeCreateBodyEvidence
 */
const SchemaOut$IssuingDisputeCreateBodyEvidence: z.ZodType<
  External$IssuingDisputeCreateBodyEvidence, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeCreateBodyEvidence // the object to be transformed
> = z
  .object({
    canceled: z
      .union([
        Schemas$IssuingDisputeCreateBodyEvidenceCanceledObj0.out,
        z.string(),
      ])
      .optional(),
    duplicate: z
      .union([
        Schemas$IssuingDisputeCreateBodyEvidenceDuplicateObj0.out,
        z.string(),
      ])
      .optional(),
    fraudulent: z
      .union([
        Schemas$IssuingDisputeCreateBodyEvidenceFraudulentObj0.out,
        z.string(),
      ])
      .optional(),
    merchandiseNotAsDescribed: z
      .union([
        Schemas$IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0.out,
        z.string(),
      ])
      .optional(),
    noValidAuthorization: z
      .union([
        Schemas$IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0.out,
        z.string(),
      ])
      .optional(),
    notReceived: z
      .union([
        Schemas$IssuingDisputeCreateBodyEvidenceNotReceivedObj0.out,
        z.string(),
      ])
      .optional(),
    other: z
      .union([
        Schemas$IssuingDisputeCreateBodyEvidenceOtherObj0.out,
        z.string(),
      ])
      .optional(),
    reason: z
      .enum([
        "canceled",
        "duplicate",
        "fraudulent",
        "merchandise_not_as_described",
        "no_valid_authorization",
        "not_received",
        "other",
        "service_not_as_described",
      ])
      .optional(),
    serviceNotAsDescribed: z
      .union([
        Schemas$IssuingDisputeCreateBodyEvidenceServiceNotAsDescribedObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      canceled: "canceled",
      duplicate: "duplicate",
      fraudulent: "fraudulent",
      merchandiseNotAsDescribed: "merchandise_not_as_described",
      noValidAuthorization: "no_valid_authorization",
      notReceived: "not_received",
      other: "other",
      reason: "reason",
      serviceNotAsDescribed: "service_not_as_described",
    });
  });

export const Schemas$IssuingDisputeCreateBodyEvidence = {
  in: SchemaIn$IssuingDisputeCreateBodyEvidence,
  out: SchemaOut$IssuingDisputeCreateBodyEvidence,
};
